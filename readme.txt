To run test in command-line
newman run https://www.getpostman.com/collections/12928f842f9dde4231b3

To run test in docker container
docker pull postman/newman;
docker run -t postman/newman run https://www.getpostman.com/collections/12928f842f9dde4231b3

To run test using script from package.json
npm run pm-test

<scripts>
"pm-test": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json",
"pm-test-iterations": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json -n 2",
"pm-test-report": "newman run postman\\collections\\GroverTests.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json -r htmlextra",
"pm-gtest": "newman run postman\\collections\\GroverGraphqlTest.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json",
"pm-gtest-report": "newman run postman\\collections\\GroverGraphqlTest.postman_collection.json -e postman\\environment\\Grover_TestEnvironment.postman_environment.json -r htmlextra",
"cy-test": "npx cypress run"

Test videos: grover/cypress/videos/
