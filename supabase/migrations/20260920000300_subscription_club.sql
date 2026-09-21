do $$ begin
  create type public.subscription_club as enum ('HORIZON', 'RESERVE', 'HOUSE');
exception when duplicate_object then null;
end $$;

alter table public.profiles
  add column if not exists subscription_club public.subscription_club;
