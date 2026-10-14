#!/usr/bin/env node
// Reads the KB's source once and keeps it in .cache/source.json (scripts/source-cache.js), so the gates that start
// next, several at a time, all read it instead of each importing every data file. check-all runs this first.

import { reloadSource } from './kb.js';

await reloadSource();
