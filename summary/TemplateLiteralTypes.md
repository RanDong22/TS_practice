# [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

## feature

- with union type

```typescript
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```

- with never type

```typescript
type t = `${never}`;
// never
```
