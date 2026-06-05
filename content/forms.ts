/**
 * Back-compat shim.
 *
 * The six gods no longer live as one array here — each is a self-contained
 * microservice manifest under `services/karuppu/<id>/`, composed by the registry
 * (`services/karuppu/registry.ts`). This file re-exports that public surface so
 * existing `@/content/forms` imports — `forms`, `formById`, `KaruppuForm`,
 * `FormId` — keep working unchanged.
 *
 * New code should import from "@/services/karuppu".
 */
export * from "@/services/karuppu";
