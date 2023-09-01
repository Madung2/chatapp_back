# 빌드 스테이지
FROM node:16 as build

# 작업 디렉토리 설정
# 의존성 파일들을 도커 이미지에 복사
WORKDIR /
COPY package*.json ./

# 프로젝트 의존성 설치
# 소스 코드 복사
RUN npm install
RUN chmod +x node_modules/.bin/*

COPY . .

# TypeScript를 JavaScript로 빌드
RUN npm run build





# 실행 스테이지
FROM node:16

WORKDIR /

# 의존성 파일들을 도커 이미지에 복사
COPY package*.json ./

# 프로덕션 의존성만 설치
RUN npm install --only=production

# 빌드 스테이지에서 빌드된 파일들을 현재 스테이지에 복사
COPY --from=build ./bin ./bin

# 앱 실행
CMD ["node", "bin/app.js"]
