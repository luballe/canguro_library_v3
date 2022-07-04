const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
var passport = require('passport');
var crypto = require('crypto');
var routes = require('./routes');