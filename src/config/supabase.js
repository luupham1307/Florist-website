import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zjuxinjcqrcvncurfkwx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqdXhpbmpjcXJjdm5jdXJma3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MjcwMTEsImV4cCI6MTk5ODUwMzAxMX0.mKWi2QE5oyArwq0PRmnHaJiYnBkhS1PTJYPAsedps4M"
);

export default supabase;