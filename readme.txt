To run test in Command prompt
newman run "C:\Users\manju\Desktop\API\GroverTests.postman_collection.json" -e "C:\Users\manju\Desktop\API\Grover_TestEnvironment.postman_environment.json" -n 2

In package.json script
"pm-test": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json",
"pm-test-iternations": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json -n 2",
"pm-test-html-report": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json -r htmlextra",
"pm-test": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json",
"pm-test-html-report": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json -r htmlextra",
"cy-test": "npx cypress run"

In docker container
docker pull postman/newman;
docker run -t postman/newman run https://www.getpostman.com/collections/12928f842f9dde4231b3