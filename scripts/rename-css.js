// scripts/rename-css.js
import fs from 'fs';
import path from 'path';

const from = path.resolve('./dist/index.css');
const to = path.resolve('./dist/soy-sample-ui.css');

if (fs.existsSync(from)) {
  fs.renameSync(from, to);
  console.log('CSS 파일 이름 변경 완료:', to);
} else {
  console.error('CSS 파일을 찾을 수 없습니다.');
}