.SILENT:
.PHONY: clear clear-soft

CON = bin/console

db-create:
	$(CON) doctrine:database:create --if-not-exists

db-migrate:
	$(CON) doctrine:migrations:migrate -n --allow-no-migration

db-reset:
	$(MAKE) db-create
	$(CON) doctrine:schema:drop --full-database --force
	$(MAKE) db-migrate

fixtures-install:
	$(CON) app:fixture

clear:
	$(MAKE) db-reset
	$(MAKE) fixtures-install
	php -d memory_limit=-1 $(CON) cache:clear
