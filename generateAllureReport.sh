#!/usr/bin/env bash

echo "Generating allure reports"
cd reports
allure generate --clean
echo "Moving allure history data to main report"
cp -r allure-report/history allure-results/
echo "Generating Dashboard"
allure open allure-report
