#利用脚本安装
apt update
apt upgrade
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
#检查是否安装成功
node --version
npm --version
#运行
root@2786285f6689:~# node
Welcome to Node.js v22.22.2.
Type ".help" for more information.
> console.log("hello")
hello
undefined
>
