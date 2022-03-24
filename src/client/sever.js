import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vznnrqlkqfpffofhyber.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bm5ycWxrcWZwZmZvZmh5YmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgxMTU5OTgsImV4cCI6MTk2MzY5MTk5OH0.Ipsif9KRFpmQUoix1hXkq09U_5ZhfsqjhU5EIbs8_-U"
);
