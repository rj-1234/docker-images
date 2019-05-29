.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

build-webapp: ## Build the Container
	docker build -t website:dev .

run-website: ## Run the Container
	docker run -ti -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm --name website-container website:dev

remove-webiste: ## Remove the website Container
	docker rm website-container

start-website: ## Start the website Container
	docker start website-container

stop-website: ## Stop the website Container
	docker stop website-container