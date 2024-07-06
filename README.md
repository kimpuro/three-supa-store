# 신발 쇼핑몰

본 프로젝트는 김동은의 신발 쇼핑몰 개발 프로젝트입니다. 현재 초기 개발 단계이며, 향후 기능 확장 및 사용자 경험 개선을 목표로 하고 있습니다.

## 주요 기술 스택

Front-end: TypeScript, React (Next.js 프레임워크), Tailwind CSS, Three.js (3D 렌더링), Recoil (상태 관리)

Back-end: Supabase (Serverless 플랫폼, 인증 및 데이터베이스 제공)

## 상세 설명

사용자 인터페이스: 직관적인 상품 탐색 및 페이지 이동 기능 제공

회원 관리: Supabase 기반의 안전한 로그인 및 회원가입 시스템 구축

상품 페이지: 상품 상세 정보 및 3D 모델 렌더링 기능 (구매 기능은 추후 개발 예정)

3D 모델 상호작용: React Three Fiber 및 Recoil을 활용한 실시간 색상 변경 기능

## 기술적 과제 및 해결 방안

현재 3D 모델 파일 (GLB)의 용량 문제로 Git LFS (Large File Storage)를 사용하고 있으나, 빈번한 풀 리퀘스트로 인해 LFS 트래픽 제한을 초과하는 문제가 발생했습니다.
이로 인해 배포가 일시 중단되었으며, 현재 해당 문제 해결을 위한 방안을 모색 중입니다.

2024-06-17(1) : 신발 쇼핑몰 프로젝트의 Git LFS 트래픽 문제를 해결하기 위해 NCP의 Object Storage에 3D 모델링을 업로드하고 배포를 진행하였으나 CSS 관련 문제가 생겨 해결 중입니다.

2024-06-17(1)번 이슈는 단순 CSS의 문제가 아닌 Next.js의 static 에셋들을 불러오지 못하는 문제였습니다.
로컬 환경에서는 localhost:3000/_next/static/ 경로로 정상적으로 불러왔으나 서버 환경에서는 store.kimpuro.com/_next/static/ 경로로 불러오지 못했습니다.
따라서 Nginx의 설정 파일에 /.next/static/ 경로를 추가해 store.kimpuro.com/_next/static/ 으로 보내는 요청을 실제 경로로 연결해 주어서 해결했습니다.

2024-06-18(1) : 메인 도메인인 kimpuro.com과 DNS 충돌이 발생하는 문제로 인해 임시로 도메인 연결을 해제했습니다.

## 향후 개발 계획
결제 시스템 연동 및 구매 기능 구현
3D 모델 최적화 및 로딩 속도 개선
Git LFS 트래픽 문제 해결 및 지속적인 배포 환경 구축

## 설명 영상

<a href="https://youtu.be/4NxH_T_iw7c?si=MjZN173J8P07l-5m&t=118">
링크입니다
</a>

