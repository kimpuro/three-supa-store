# 신발 쇼핑몰

김동은의 신발 쇼핑몰 미니 프로젝트 입니다.

## 주요 기술 스택

TypeScript, React, Next.js, Tailwind CSS, Three.js, Recoil, Supabase

## 상세 설명

메인 페이지에는 상품을 둘러보러 가거나 상단의 헤더를 통해 원하는 위치로 바로 이동할 수 있습니다.

로그인과 회원 가입은 supabase의 서버리스 db 시스템을 통해 구현되어 있습니다.
회원 가입을 진행한다면 supabase db에 유저가 추가되게 됩니다. supabase를 통한 메일 인증을 받게 되고 메일의 링크를 클릭한다면 보안 코드가 인증 토큰으로 교체됩니다.
실제 로직은 next.js의 서버 액션, 서버 컴포넌트, 미들웨어를 통해서 진행됩니다.
시간 당 메일 전송 횟수가 초과된 상태라면 테스트 계정이 있는 페이지로 안내하고
아이디나 비밀번호가 틀렸다면 그에 대한 안내 페이지로 이동합니다.
로그인을 한 상태라면 마이페이지의 접속해 본인의 유저 정보를 확인할 수 있습니다.

지금 현재는 남성 여성 그리고 고양이에 대한 카테고리는 전부 같은 페이지로 연결됩니다.
상품도 4가지가 모두 같은 상품입니다.
클릭을 한다면 상품의 상세 정보를 볼 수 있습니다.
구매 버튼은 추후에 구현할 예정입니다.

프리뷰를 누르신다면 three js 로 랜더링한 신발의 3d모델링을 보실 수 있습니다.

3D 모델링은 glb 파일입니다. glb 파일은 용량이 크기 때문에 git lfs를 사용해 저장하였고 이를 배포할 때 lfs에서 다운 받아서 배포를 진행하게 됩니다.
현재는 풀 리퀘스트가 발생할 때마다 lfs에서 모델링을 다운 받고 빌드 후 배포를 하게 되는데 너무 많은 풀 리퀘스트로 git lfs의 트래픽 제한을 넘어버리는 문제가 발생했습니다.
그래서 배포를 중단하게 되었고 이를 해결하는 것이 목표입니다.

신발의 부위를 클릭한 후 색을 선택한다면 신발의 부위별로 색을 바꿔볼 수 있습니다.
신발 부위의 선택은 react three fiber의 레이캐스터를 사용했습니다.
신발 색의 상태는 리코일을 통해 관리됩니다.
3d 모델링은 매쉬마다 각각 따로 상태를 저장하므로 추후 구매 기능을 추가한다면
본인이 선택한 색을 불러올 수 있습니다.

## 설명 영상

<a href="https://youtu.be/4NxH_T_iw7c?si=MjZN173J8P07l-5m&t=118">
링크입니다
</a>

