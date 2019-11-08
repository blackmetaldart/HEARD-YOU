#!/usr/bin/env bash
set -e

psql -U postgres -c "CREATE ROLE marksman LOGIN  PASSWORD 'password'"
psql -U postgres -d postgres -c "CREATE DATABASE runnerdev OWNER marksman"
psql -U postgres -d postgres -c "GRANT ALL PRIVILEGES ON DATABASE runnerdev TO marksman"