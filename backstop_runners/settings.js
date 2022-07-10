module.exports =
{
  id: 'screen',
  paths: {
    bitmaps_reference: 'bitmaps/bitmaps_reference',
    bitmaps_test: 'bitmaps/bitmaps_test',
    engine_scripts: 'engine_scripts',
    html_report: 'reports/html_report',
    ci_report: 'reports/ci_report',
  },
  report: [],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 2,
  asyncCompareLimit: 10,
  debug: false,
  debugWindow: false,
};
