
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fjnnsltvqjqqabiuoelg.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbm5zbHR2cWpxcWFiaXVvZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MDQ3MTksImV4cCI6MjAzOTI4MDcxOX0.e4CxF1YBiOq1lApXVMWvq3Tc_8JRX79zgyFOqpNOfDYeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbm5zbHR2cWpxcWFiaXVvZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MDQ3MTksImV4cCI6MjAzOTI4MDcxOX0.e4CxF1YBiOq1lApXVMWvq3Tc_8JRX79zgyFOqpNOfDY"

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }
export const supabase = createClient(supabaseUrl, supabaseKey);