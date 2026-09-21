import { supabase } from "@/integrations/supabase/client";

export type RequestInput = { serviceType: string; serviceSubtype?: string; peopleCount: number; budget?: number; currency: string; departure?: string; destination?: string; startDate?: string; endDate?: string; tripType?: string; additionalRequirements?: string; customerDetails: Record<string, unknown>; serviceDetails: Record<string, unknown> };

export async function createRequest(input: RequestInput) {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error("Your session has expired. Please sign in again.");
  const { data: requestNumber, error: numberError } = await supabase.rpc("next_request_number");
  if (numberError) throw numberError;
  const { data, error } = await supabase.from("requests").insert({ request_number: requestNumber, customer_id: auth.user.id, service_type: input.serviceType, service_subtype: input.serviceSubtype, status: "SUBMITTED", people_count: input.peopleCount, budget: input.budget, currency: input.currency, departure: input.departure, destination: input.destination, start_date: input.startDate, end_date: input.endDate, trip_type: input.tripType, additional_requirements: input.additionalRequirements, customer_details: input.customerDetails, service_details: input.serviceDetails }).select().single();
  if (error) throw error;
  return data;
}

export async function listCustomerRequests() { const { data, error } = await supabase.from("requests").select("*, request_documents(*)").order("created_at", { ascending: false }); if (error) throw error; return data; }
export async function getRequest(id: string) { const { data, error } = await supabase.from("requests").select("*, request_documents(*), request_timeline(*)").eq("id", id).single(); if (error) throw error; return data; }
export async function listStaffRequests() { const { data, error } = await supabase.from("requests").select("*, request_documents(*)").order("created_at", { ascending: false }); if (error) throw error; return data; }
