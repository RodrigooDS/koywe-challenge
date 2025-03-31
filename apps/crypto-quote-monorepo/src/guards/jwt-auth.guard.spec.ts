import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';

jest.mock('@nestjs/jwt');

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;
  let mockJwtService: jest.Mocked<JwtService>;

  const mockGetRequest = jest.fn();
  const mockHttpContext = {
    getRequest: mockGetRequest,
  };

  const mockExecutionContext = {
    switchToHttp: jest.fn().mockReturnValue(mockHttpContext),
  } as unknown as ExecutionContext;

  beforeEach(() => {
    mockJwtService = {
      verifyAsync: jest.fn(),
    } as unknown as jest.Mocked<JwtService>;

    (JwtService as jest.MockedClass<typeof JwtService>).mockImplementation(() => mockJwtService);

    guard = new JwtAuthGuard();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('canActivate', () => {
    it('should allow access with valid token', async () => {
      const mockPayload = { sub: 'user-id', email: 'test@example.com' };
      const mockRequest = {
        headers: {
          authorization: 'Bearer valid-token',
        },
        user: undefined,
      };

      mockGetRequest.mockReturnValue(mockRequest);
      mockJwtService.verifyAsync.mockResolvedValue(mockPayload);

      const result = await guard.canActivate(mockExecutionContext);

      expect(result).toBe(true);
      expect(mockRequest.user).toEqual(mockPayload);
      expect(mockJwtService.verifyAsync).toHaveBeenCalledWith('valid-token');
    });

    it('should throw UnauthorizedException when no token provided', async () => {
      const mockRequest = {
        headers: {},
        user: undefined,
      };

      mockGetRequest.mockReturnValue(mockRequest);

      await expect(guard.canActivate(mockExecutionContext)).rejects.toThrow(new UnauthorizedException('No token provided'));
    });

    it('should throw UnauthorizedException when authorization header is missing', async () => {
      const mockRequest = {
        headers: {
          authorization: undefined,
        },
        user: undefined,
      };

      mockGetRequest.mockReturnValue(mockRequest);

      await expect(guard.canActivate(mockExecutionContext)).rejects.toThrow(new UnauthorizedException('No token provided'));
    });

    it('should throw UnauthorizedException when token type is not Bearer', async () => {
      const mockRequest = {
        headers: {
          authorization: 'Basic valid-token',
        },
        user: undefined,
      };

      mockGetRequest.mockReturnValue(mockRequest);

      await expect(guard.canActivate(mockExecutionContext)).rejects.toThrow(new UnauthorizedException('No token provided'));
    });

    it('should throw UnauthorizedException when token verification fails', async () => {
      const mockRequest = {
        headers: {
          authorization: 'Bearer invalid-token',
        },
        user: undefined,
      };

      mockGetRequest.mockReturnValue(mockRequest);
      mockJwtService.verifyAsync.mockRejectedValue(new Error('Token verification failed'));

      await expect(guard.canActivate(mockExecutionContext)).rejects.toThrow(new UnauthorizedException('Invalid token'));
      expect(mockJwtService.verifyAsync).toHaveBeenCalledWith('invalid-token');
    });
  });
});
