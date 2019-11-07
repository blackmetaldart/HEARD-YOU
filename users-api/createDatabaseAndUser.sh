#!/usr/bin/env bash
set -e

psql -U postgres -c "CREATE ROLE postgres LOGIN  PASSWORD 'password'"
psql -U postgres -d postgres -c "CREATE DATABASE runnerdev OWNER postgres"