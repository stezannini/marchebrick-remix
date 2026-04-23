
## Logo dell'header: raddoppio dimensioni

Ingrandirò il logo nell'header del sito raddoppiandone altezza e larghezza, mantenendo le proporzioni originali.

### Modifica

**File**: `src/components/SiteHeader.tsx`

Cambierò la classe dell'immagine del logo da `h-12` (3rem / 48px) a `h-24` (6rem / 96px). Poiché la larghezza è impostata su `w-auto`, si adatterà automaticamente mantenendo la proporzione originale, raddoppiando di fatto sia altezza che larghezza visibile.

```tsx
<img src={logo} alt="Marchebrick" className="h-24 w-auto" />
```

Nessun'altra modifica è necessaria: l'header userà più spazio verticale per accogliere il logo più grande, ma il layout (flex con `items-center`) si adatta automaticamente.
