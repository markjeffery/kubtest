# kubtest

Test Node.js build for kubernetes use within minikube on the Mac.

in kubernetes, execute this for my own controller:

kubectl run hello-node --image=markjeffery/kubtest:latest --port=8080 --env="APPDYNAMICS_CONTROLLER_HOST_NAME=se-demo-uk.demo.appdynamics.com" --env="APPDYNAMICS_CONTROLLER_PORT=8090" --env="APPDYNAMICS_AGENT_ACCOUNT_NAME=customer1" --env="APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY=148555b6-a823-40ff-a34f-c74eec4c7436" --env="APPDYNAMICS_AGENT_APPLICATION_NAME=kubtest" --env="APPDYNAMICS_AGENT_TIER_NAME=node" --env="EXTERNAL_WEBSERVICE=http://localhost:68839/"
