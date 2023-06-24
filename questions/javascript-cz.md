**Falsey hodnoty v JavaScriptu:**

V JavaScriptu jsou falsey hodnoty hodnoty, které jsou považovány za nepravdivé (false), když jsou vyhodnocovány v logickém kontextu. Tyto hodnoty jsou:

1. `false`: Logická hodnota `false`.
2. `0`: Číslo nula.
3. `''`: Prázdný řetězec.
4. `null`: Speciální hodnota, která značí nepřítomnost jakéhokoli objektu.
5. `undefined`: Hodnota, která označuje neinicializovanou proměnnou nebo chybějící vlastnost.
6. `NaN`: Speciální hodnota, která znamená "Not-a-Number" (Není číslo), a která vzniká při neplatné matematické operaci.
7. `document.all`: Speciální objekt, který je vytvořen pro kompatibilitu s Internet Explorerem.
8. `-0`: Záporná nula.
9. `0n`: BigInt nula.

Když se tyto hodnoty objeví v logickém výrazu, automaticky se převedou na `false`. Je důležité poznamenat, že všechny ostatní hodnoty v JavaScriptu jsou považovány za "pravdivé" (truthy) a vyhodnocují se jako `true` v logickém kontextu.

---

**Rozdíly mezi `const`, `let` a `var` v JavaScriptu:**

1. `var`: `var` byl původní způsob deklarace proměnných v JavaScriptu. Proměnné deklarované pomocí `var` mají rozsah funkce nebo jsou globální, v závislosti na tom, zda jsou deklarovány uvnitř funkce nebo mimo jakýkoli blok funkce. `var` proměnné lze přeclonit a přiřadit znovu ve svém rozsahu, a během běhu JavaScriptu jsou vyvýšeny na začátek svého rozsahu.

2. `let`: `let` bylo představeno v ES6 (ECMAScript 2015) jako deklarace proměnné s rozsahem bloku. Proměnné deklarované pomocí `let` mají rozsah bloku, což znamená, že jsou omezeny na blok (vymezený pomocí `{}`), ve kterém jsou definovány. Na rozdíl od `var` nelze proměnné deklarované s `let` v rámci stejného rozsahu přeclonit, ale lze jim přiřadit novou hodnotu.

3. `const`: `const` také bylo přidáno v ES6 a slouží k deklaraci konstant, které nelze znovu přiřadit po jejich definici. Stejně jako `let`, `const` má rozsah bloku a nelze ji opětovně deklarovat v rámci stejného rozsahu. Je však důležité poznamenat, že `const` nezaručuje nezměnitelnost proměnné, pouze brání změně jejího přiřazení. Pokud `const` proměnná obsahuje objekt nebo pole, stále je možné měnit jejich vlastnosti nebo prvky.

Obecně se doporučuje používat `const` pro proměnné, které nemají být znovu přiřazeny, `let` pro proměnné, které potřebují být znovu přiřazeny, a v moderním JavaScriptovém vývoji se doporučuje se vyhnout používání `var` kvůli jeho méně předvídatelnému chování v oblasti rozsahu.

---

**Rozdíl mezi `==` a `===` v JavaScriptu:**

Otázka se týká rozdílu mezi dvěma porovnávacími operátory v JavaScriptu: `==` a `===`.

- `==` (dvojité rovnítko) je porovnávací operátor, který provádí volání ne-přísné rovnosti. To znamená, že před porovnáním dochází k automatickému převodu typů, pokud jsou porovnávané hodnoty různých typů. Například, `5 == "5"` by vrátilo `true`, protože jsou hodnoty ekvivalentní, i když jeden je číslo a druhý je řetězec.

- `===` (trojité rovnítko) je porovnávací operátor, který provádí přísné porovnání. Porovnává hodnoty i typy dat. Například, `5 === "5"` by vrátilo `false`, protože se liší jak hodnota, tak typ.

Je doporučeno používat `===` (přísné porovnání) většinou, protože respektuje jak hodnotu, tak typ dat, což může vést k přesnějším a očekávaným výsledkům porovnání.

---

**Rozdíl mezi `undefined` a `null` v JavaScriptu:**

V JavaScriptu jsou `undefined` a `null` oba speciální hodnoty, které reprezentují absenci smysluplné hodnoty. Nicméně, používají se v různých kontextech a mají drobné rozdíly ve svém chování:

1. `undefined`: Když je proměnná deklarována, ale není jí přiřazena žádná hodnota, má implicitní hodnotu `undefined`. Rovněž indikuje absenci návratové hodnoty funkce nebo absenci definované vlastnosti objektu. Jinými slovy, signalizuje nepřítomnost jakékoli přiřazené hodnoty nebo úmyslné hodnoty.

2. `null`: Na rozdíl od `undefined`, `null` je přiřazená hodnota, která značí absenci jakékoli objektové hodnoty. Obvykle se používá k explicitnímu označení toho, že proměnná nebo vlastnost objektu nemá žádnou hodnotu nebo je úmyslně prázdná. Často se používá, když chcete vymazat hodnotu proměnné nebo obnovit vlastnost objektu do prázdného stavu.

Závěrem, `undefined` je výchozí hodnota, když proměnné není přiřazena žádná hodnota, zatímco `null` je explicitní hodnota, která reprezentuje absenci objektové hodnoty. Mají odlišné účely a používají se v různých scénářích v JavaScriptovém programování.

---

**Různé datové typy v JavaScriptu:**

Zde je seznam několika často používaných datových typů v JavaScriptu:

1. **Number**: Reprezentuje numerické hodnoty, včetně celých čísel a desetinných čísel. Například `5`, `3.14` a `-10` jsou čísla.

2. **String**: Reprezentuje sekvence znaků uzavřené v jednoduchých (`'`) nebo dvojitých (`"`) uvozovkách. Například `'Ahoj'` a `"JavaScript"` jsou řetězce.

3. **Boolean**: Reprezentuje logickou hodnotu buď `true` (pravda) nebo `false` (nepravda). Booleany se často používají v podmíněných výrazech a porovnávání.

4. **Object**: Reprezentuje sbírku klíč-hodnota, kde každá hodnota může být libovolného datového typu. Objekty se vytvářejí pomocí složených závorek `{}` a mohou být přístupné a manipulovány pomocí tečkové notace (`objekt.vlastnost`) nebo závorkové notace (`objekt['vlastnost']`).

5. **Undefined**: Reprezentuje proměnnou, která byla deklarována, ale ještě jí nebyla přiřazena žádná hodnota. Je to výchozí hodnota pro neinicializované proměnné.

6. **Null**: Reprezentuje záměrnou absenci jakékoli objektové hodnoty. Obvykle se používá k označení toho, že proměnná nebo vlastnost objektu nemá žádnou hodnotu.

7. **Symbol**: Reprezentuje unikátní identifikátor. Symboly se často používají jako klíče pro vlastnosti objektu, aby se zabránilo kolizím názvů.

8. **BigInt**: Reprezentuje celá čísla libovolné přesnosti. `BigInt` je používán pro přesné reprezentování a provádění aritmetických operací na velkých celých číslech.

Toto jsou některé z základních datových typů v JavaScriptu, které poskytují základní stavební bloky pro ukládání a manipulaci s daty v JavaScriptových programech.

---

**Operátor spread (`...`) a rest parametr (`...`):**

Operátor spread (`...`) a rest parametr (`...`) jsou funkčnosti v jazyce JavaScript, které se používají pro práci s poli a argumenty funkcí.

Operátor spread (`...`) je používán k rozbalení iterovatelného objektu (například pole nebo řetězce) na jednotlivé prvky. Umožňuje kopírování, konkatenaci nebo klonování polí a také předávání více prvků jako argumenty do funkce.

Rest parametr (`...`) je používán k reprezentaci libovolného počtu argumentů jako pole. Umožňuje předávat více argumentů do funkce bez explicitního definování každého argumentu.

**Příklady:**

```javascript
// Operátor spread - kopírování polí
const puvodniPole = [1, 2, 3];
const novePole = [...puvodniPole];

// Operátor spread - konkatenace polí
const pole1 = [1, 2, 3];
const pole2 = [4, 5, 6];
const spojenePole = [...pole1, ...pole2];

// Operátor spread - předávání argumentů
const cisla = [1, 2, 3, 4, 5];
const nejvetsiCislo = Math.max(...cisla);

// Rest parametr - parametry funkce
function soucet(...cisla) {
  return cisla.reduce((celkem, cislo) => celkem + cislo, 0);
}
const vysledek = soucet(1, 2, 3, 4, 5);

// Rest parametr - destrukturační přiřazení polí
const [prvni, druhy, ...zbytek] = [1, 2, 3, 4, 5];
console.log(prvni);  // 1
console.log(druhy);  // 2
console.log(zbytek); // [3, 4, 5]
``` 

---

**Co je destrukturalizace objektu a pole a proč byste ji mohli použít?**

Destrukturalizace je technika v JavaScriptu, která umožňuje snadné extrahování hodnot z objektů nebo polí a přiřazení těchto hodnot do samostatných proměnných. Tato technika usnadňuje přístup k jednotlivým prvkům a vlastnostem a zjednodušuje manipulaci s daty.

**Destrukturalizace objektu:**

Pomocí destrukturalizace objektu můžete extrahovat hodnoty vlastností objektu a přiřadit je do nových proměnných s odpovídajícími názvy. Tímto způsobem můžete rychle přistupovat k hodnotám objektu a snadno je používat v kódu.

```javascript
const objekt = { jmeno: 'John', prijmeni: 'Doe', vek: 30 };
const { jmeno, prijmeni, vek } = objekt;

console.log(jmeno);     // 'John'
console.log(prijmeni);  // 'Doe'
console.log(vek);       // 30
```

- Zkrácení zápisu kódu: Destrukturalizace umožňuje zjednodušit přístup k hodnotám objektů a prvkům polí bez nutnosti ručně přistupovat k nim pomocí tečkové nebo závorkové notace.
- Jednoduché přejmenování proměnných: Při destrukturalizaci můžete přiřadit hodnotám objektů nebo prvkům polí nová jména proměnných, což umožňuje přejmenování bez zásahu do původních datových struktur.
- Vybrané hodnoty: Destrukturalizace vám umožňuje extrahovat pouze vybrané hodnoty, které potřebujete, a ignorovat zbytek, což zlepšuje efektivitu a čitelnost kódu.

---

**Co jsou Promise a proč byste je měli používat?**

**Promise** jsou asynchronní programovací funkce, které byly zavedeny v JavaScriptu pro správu a koordinaci asynchronních operací. Reprezentují hodnotu, která nemusí být okamžitě dostupná, ale bude vyřešena nebo odmítnuta v budoucnosti.

Promise poskytují způsob, jak řídit asynchronní operace organizovaněji a čitelněji. Namísto spoléhání na zpětné volání (callback) funkcí, které mohou vést ke komplikovanému kódu a tzv. "callback hell", Promise nabízejí strukturovaný přístup k manipulaci s asynchronními úlohami.

Zde jsou některé důvody, proč byste měli používat Promise:

1. **Asynchronní operace**: Promise jsou ideální pro správu asynchronních operací, jako je získávání dat z API, čtení ze souboru nebo provádění dotazů do databáze. Umožňují vám zpracovat výsledek těchto operací, jakmile jsou vyřešeny, aniž byste blokovali vykonávání jiných úloh.

2. **Zpracování chyb**: Promise poskytují vestavěný mechanismus pro zpracování chyb při asynchronních operacích. Umožňují vám připojit manipulátor `.catch()`, který zpracuje všechny chyby, které se vyskytnou během vykonávání promise, a poskytují tak centralizovaný a konzistentní způsob správy chyb.

3. **Řetězení a sekvencování**: Promise lze řetězit pomocí metody `.then()`, což umožňuje provést sekvenci asynchronních operací postupně za sebou. To podporuje čistý a čitelný kód ve srovnání s vnořenými zpětnými voláními.

4. **Paralelní provádění**: Promise lze použít k paralelnímu provedení více asynchronních operací a čekání na jejich dokončení pomocí `Promise.all()`. Je to užitečné, když potřebujete provést několik nezávislých úkolů současně.

5. **Kompozice**: Promise lze skládat a kombinovat pomocí metod jako `Promise.all()`, `Promise.race()` a `Promise.any()`. To umožňuje složitější pracovní postupy a umožňuje vám orchestraci více asynchronních úloh s různými závislostmi a výsledky.

Celkově řečeno, Promise poskytují strukturovaný a efektivní způsob pro zpracování asynchronních operací v JavaScriptu, což činí kód čitelnějším, snadněji udržovatelným a méně náchylným k chybám. Jsou široce používány v moderních JavaScriptových aplikacích a jsou základem pro novější funkce, jako je `async/await`.

---

**Co znamená předávání hodnotou a jak se liší od předávání odkazem?**

#Jonas115

Předávání hodnotou (pass by value) a předávání odkazem (pass by reference) jsou dva různé způsoby, jak předávat argumenty do funkcí v programovacích jazycích.

Při předávání hodnotou je do funkce předána kopie hodnoty proměnné. Jakékoli změny provedené na parametru uvnitř funkce se neprojeví na původní proměnné mimo funkci. Toto je výchozí chování pro primitivní datové typy, jako jsou čísla, logické hodnoty a řetězce. Změny provedené na parametru uvnitř funkce jsou místní pro danou funkci a neovlivňují volající kód.

Při předávání odkazem je do funkce předána reference nebo paměťová adresa proměnné. To znamená, že funkce může přímo přistupovat k původní proměnné mimo funkci a modifikovat ji. Jakékoli změny provedené na parametru uvnitř funkce ovlivní původní proměnnou. Předávání odkazem se často používá u složených datových typů, jako jsou objekty a pole.

Zde je shrnutí rozdílů mezi předáváním hodnotou a předáváním odkazem:

**Předávání hodnotou:**
- Do funkce je předána kopie hodnoty.
- Změny provedené na parametru uvnitř funkce neprojeví na původní proměnné.
- Změny provedené na parametru jsou místní pro funkci.
- Používá se pro primitivní datové typy (čísla, logické hodnoty, řetězce).

**Předávání odkazem:**
- Do funkce je předána reference nebo paměťová adresa proměnné.
- Změny provedené na parametru uvnitř funkce ovlivní původní proměnnou.
- Změny provedené na parametru se projeví v volajícím kódu.
- Používá se pro složené datové typy (objekty, pole).

Pochopení rozdílu mezi předáváním hodnotou a předáváním odkazem je důležité při práci s funkcemi a manipulaci s daty v programovacích jazycích. Pomáhá porozumět tomu, jak se data sdílí a mění mezi různými částmi kódu.


```javascript
const prim = 5;

function add(value) {
    value++;

    return value;
}

console.log(add(prim), prim); // 6 5
```

```javascript

const ref = { count: 5 };

function add2(value) {
    value.count++;

    return value.count;
}

console.log(add2(ref), ref.count); // 6 6
```

---

**Expression v JavaScriptu:**

V JavaScriptu je výraz kombinace hodnot, proměnných, operátorů a volání funkcí, která produkuje výsledek. Reprezentuje výpočet nebo akci, která může být vyhodnocena a vrátit jedinou hodnotu.

Zde je příklad výrazu v JavaScriptu:

```javascript
let x = 5;
let y = 3;
let result = x + y * 2; // Aritmetický výraz
```