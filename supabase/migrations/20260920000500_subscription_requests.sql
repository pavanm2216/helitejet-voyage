do $$ begin
  create type public.subscription_status as enum ('PENDING', 'ACTIVE', 'CANCELLED');
exception when duplicate_object then null;
end $$;

alter table public.profiles
  add column if not exists subscription_status public.subscription_status;

create table if not exists public.subscription_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id) on delete cascade,
  club public.subscription_club not null,
  payment_method text not null,
  billing_cycle text not null default 'YEARLY',
  message text,
  status public.subscription_status not null default 'PENDING',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.subscription_requests enable row level security;

drop policy if exists sub_req_customer_select on public.subscription_requests;
create policy sub_req_customer_select on public.subscription_requests
  for select using (customer_id = auth.uid() or public.is_role('ADMIN') or public.is_role('SALES'));

drop policy if exists sub_req_customer_insert on public.subscription_requests;
create policy sub_req_customer_insert on public.subscription_requests
  for insert with check (customer_id = auth.uid() and public.is_role('CUSTOMER'));

drop policy if exists sub_req_staff_update on public.subscription_requests;
create policy sub_req_staff_update on public.subscription_requests
  for update using (public.is_role('ADMIN') or public.is_role('SALES'));
