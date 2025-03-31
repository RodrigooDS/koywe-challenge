const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const istanbulReports = require('istanbul-reports');
const libReport = require('istanbul-lib-report');
const istanbulCoverage = require('istanbul-lib-coverage');

/* [ Configuration ] */
const rootDir = './coverage';
const reportOut = './coverage/report';

const configWatermarks = {
  statements: [50, 80],
  functions: [50, 80],
  branches: [0, 80],
  lines: [50, 80],
};

const normalizeJestCoverage = (obj) => {
  const result = { ...obj };

  Object.entries(result)
    .filter(([k, v]) => v.data)
    .forEach(([k, v]) => {
      result[k] = v.data;
    });

  return result;
};

const mergeAllReports = (coverageMap, reports) => {
  if (Array.isArray(reports) === false) {
    return;
  }

  reports.forEach((reportFile) => {
    const coverageReport = fs.readJSONSync(reportFile);
    coverageMap.merge(normalizeJestCoverage(coverageReport));
  });
};

const findAllCoverageReports = (path, callback) => {
  glob(path, {}, (err, reports) => {
    callback(reports, err);
  });
};

const generateReport = (coverageMap, type) => {
  const context = libReport.createContext({
    dir: reportOut,
    defaultSummarizer: 'nested',
    watermarks: configWatermarks,
    coverageMap,
  });
  const report = istanbulReports.create(type, {
    skipEmpty: false,
    skipFull: true,
    verbose: true,
  });
  report.execute(context);
};

const getLcovFiles = function (src) {
  return new Promise((resolve, reject) => {
    glob(`${src}/**/lcov.info`, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
};

async function mergeLcovFiles() {
  const files = await getLcovFiles('coverage');
  const mergedReport = files.reduce((mergedReport, currFile) => (mergedReport += fs.readFileSync(currFile)), '');
  await fs.writeFile(path.resolve('./coverage/report/lcov.info'), mergedReport, (err) => {
    if (err) throw err;
    console.log('Coverage files has been merged');
  });
}

async function main() {
  const coverageMap = istanbulCoverage.createCoverageMap({});

  findAllCoverageReports(rootDir + '/**/coverage-final.json', async (reports, err) => {
    if (Array.isArray(reports)) {
      mergeAllReports(coverageMap, reports);
      generateReport(coverageMap, 'text');
      generateReport(coverageMap, 'html');
      await mergeLcovFiles();
    }
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
