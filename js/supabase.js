// js/supabase.js
const SUPABASE_URL = "https://xgknxgixeoptrgniiwiq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhna254Z2l4ZW9wdHJnbmlpd2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MzIwOTksImV4cCI6MjA3NjMwODA5OX0.NeJ8_ezbWEpqJzYxxZ6fZtOWrOt0rbmooWosCvxmoeI";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

