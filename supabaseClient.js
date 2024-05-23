require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPA_BASE_URL;
const supabaseKey = process.env.SUPA_BASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
