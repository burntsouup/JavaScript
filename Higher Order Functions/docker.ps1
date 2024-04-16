docker build -t giphy .
docker images

docker run -dit --name giphy-app -p 1234:80 giphy
$dockid = $(docker ps -a -q --filter "name=giphy-app")
docker stop $dockid
docker start $dockid

Connect-AzAccount
Connect-AzContainerRegistry -Name giphy
docker tag giphy giphy.azurecr.io/giphy:v1
docker push giphy.azurecr.io/giphy:v1
