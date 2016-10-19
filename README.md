# kubtest

Test Node.js build for kubernetes use within minikube on the Mac.

in kubernetes, execute this for my own controller:

kubectl create -f pod-kubtest.yaml

wait a bit

kubectl expose deployment kubtest --type=NodePort

wait a bit

kubectl get services
