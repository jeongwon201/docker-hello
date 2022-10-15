# docker-hello

도커 실습

참고
https://happycloud-lee.tistory.com/244?category=830565

CentOS 8.4 Server 다운로드 이슈
>>
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

CentOS 도커 설치 에러
- CentOS 에서 podman과 buildah 때문에 설치를 막아놓았음, podman과 buildah 삭제
> $ yum remove podman
> $ yum remove buildah

도커 서비스 에러
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
- 도커 서비스가 실행중인 상태가 아니기 때문에 발생하는 오류
> $ systemctl start docker
