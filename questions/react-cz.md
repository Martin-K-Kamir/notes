**REAL DOM VS VIRTUAL DOM:**

THE KEY IS DIFFING

Rozdíl mezi virtuálním DOM a reálným DOM v Reactu spočívá v tom, že virtuální DOM je lehkou kopií reálného DOMu, kterou udržuje React.

Reálný DOM reprezentuje skutečnou strukturu HTML dokumentu, kde každý prvek je objektovým uzlem. Je přímo manipulován pomocí JavaScriptu a jakékoli změny v něm mohou být náročné z hlediska výkonu, zejména při práci s velkými a složitými aplikacemi.

Na druhé straně je virtuální DOM abstraktní vrstva vytvořená Reactem. Jedná se o reprezentaci reálného DOMu uchovávanou v paměti. React používá algoritmus srovnávání virtuálního DOMu s předchozí verzí, tzv. diffing, který identifikuje rozdíly a efektivně aktualizuje pouze nezbytné části v reálném DOMu.

Díky použití virtuálního DOMu minimalizuje React přímou manipulaci s reálným DOMem, což vede ke zlepšení výkonu. Virtuální DOM umožňuje Reactu seskupovat a optimalizovat aktualizace, čímž snižuje počet skutečných manipulací s DOMem. To činí aplikace postavené na Reactu rychlejší a efektivnější.

Závěrem, reálný DOM je skutečná struktura HTML stránky, zatímco virtuální DOM je lehkou a efektivní reprezentací reálného DOMu, kterou React využívá k optimalizaci aktualizací a zlepšení výkonu.

---

**WHAT IS JSX:**

JSX znamená JavaScript XML. Jedná se o rozšíření syntaxe JavaScriptu používané v Reactu k popisu struktury a obsahu komponent způsobem deklarativním způsobem.

JSX umožňuje zapisovat kód podobný HTML přímo ve vašich souborech JavaScriptu. Poskytuje stručnou a intuitivní syntaxi pro definici struktury a chování UI komponent. S JSX můžete kombinovat HTML elementy, atributy a výrazy JavaScriptu do jedné syntaxe.

Například, místo manipulace s DOMem pomocí JavaScriptových funkcí, JSX vám umožňuje psát komponenty způsobem, který je intuitivnější. Zde je příklad JSX kódu:

`const element = <h1>Ahoj, JSX!</h1>;`

V uvedeném kódu se syntaxe JSX podobá HTML, ale ve skutečnosti se jedná o JavaScriptový výraz. JSX elementy mohou obsahovat HTML značky, vlastní React komponenty a výrazy JavaScriptu uzavřené v složených závorkách.

React používá transpiler, například Babel, k přeměně JSX do běžného JavaScriptu, který rozumí prohlížeč. Během procesu transformace se JSX převádí na volání funkce `React.createElement()`, která vytváří virtuální reprezentaci struktury komponenty.

JSX přináší několik výhod, včetně lepší čitelnosti, lepší organizace kódu a schopnosti plně využít sílu JavaScriptu ve značkování komponent. Jedná se o klíčovou funkci vývoje v Reactu, která usnadňuje tvorbu a údržbu složitých uživatelských rozhraní.


**Element:**
```javascript
const element = <h1>Hello, world!</h1>;
```

**Component:** 
```javascript
function Component(props) {
  return <h1>Hello, {props.name}</h1>;
}

<div>
    <Component name="John" />
    <Component name="Jane" />
</div>
```

**Can I use JSX without React?**

yes
```javascript
const component = () => React.createElement('h1', null, 'Hello World');
```

---

**What is the diff between State and Props:**

State:
- State je vestavěná vlastnost v Reactu, která reprezentuje interní data komponenty.
- State je měnitelný a může být změněn samotnou komponentou pomocí metody `setState()`.
- State je spravován a aktualizován v rámci komponenty, která ho deklaruje.
- Změny v state vyvolávají znovuvykreslení komponenty a také znovuvykreslení dětských komponent ovlivněných změnou state.
- State se obvykle používá pro ukládání dat, která jsou místní a specifická pro danou komponentu.

Props:
- Props (zkratka pro vlastnosti) jsou vstupy do React komponenty, které jsou předány z rodičovské komponenty.
- Props jsou neměnné (immutable) a nemohou být změněny samotnou komponentou, která je přijímá.
- Props se používají k předávání dat z rodičovské komponenty do dětských komponent.
- Změny v props nevyvolávají automaticky znovuvykreslení komponenty. Je třeba je explicitně zpracovat v rámci komponenty pomocí lifecycle metod nebo React hooků.
- Props se obvykle používají k předávání dat a chování mezi komponentami v unidirekcionálním toku.

Závěrem, state reprezentuje interní data komponenty, která může být změněna samotnou komponentou. Props jsou neměnná data předávaná z rodičovských komponent do dětských komponent. State je spravován v rámci komponenty, vyvolává znovuvykreslení a slouží pro ukládání místních dat komponenty. Props slouží k předávání dat a chování mezi komponentami v unidirekcionálním toku.

---

**What is the diff between State Class and State Functional Components:**

State v komponentách tříd:
- Ve třídních komponentách je stav (state) spravován pomocí objektu `this.state`.
- Stav lze inicializovat v konstruktoru komponenty pomocí `this.state = { /* počáteční stav */ }`.
- Stav lze aktualizovat pomocí metody `this.setState()` poskytované Reactem.
- Při změně stavu React automaticky znovu vykreslí komponentu a její dětské komponenty.
- Třídní komponenty mohou mít lokální stav a každá instance komponenty má vlastní oddělený stav.

State v funkčních komponentách (s Hooks):
- Před zavedením React Hooks funkční komponenty neměly vlastní stav.
- Díky zavedení React Hooks mohou funkční komponenty nyní mít stav pomocí hooku `useState`.
- Hook `useState` umožňuje deklarovat stavové proměnné a jejich počáteční hodnoty v rámci funkčních komponent.
- Stavové proměnné a funkce pro aktualizaci stavu jsou vráceny jako pole z hooku `useState`.
- Stav funkční komponenty je nezávislý na ostatních instancích komponenty a nedochází k vzájemnému ovlivňování.
- Při změně stavu React znovu vykreslí komponentu a aktualizuje příslušné části uživatelského rozhraní.

Závěrem, ve třídních komponentách se stav spravuje pomocí objektu `this.state` a metody `this.setState()`, zatímco ve funkčních komponentách (s Hooks) se stav spravuje pomocí hooku `useState` pro deklaraci a správu stavových proměnných. Obě třídní komponenty a funkční komponenty s využitím stavu mohou vyvolat znovuvykreslení při změně stavu, avšak implementace a syntaxe se mezi nimi liší.

---

**What is the component lifecycle:**

Životní cyklus komponenty se odkazuje na různé fáze, kterými React komponenta prochází, od jejího vytvoření po její odstranění z DOMu. Metody životního cyklu umožňují provádět specifické úkoly v různých bodech životního cyklu komponenty.

Existují tři hlavní fáze v životním cyklu komponenty:

1. Montování (Mounting):
    - `constructor()`: Inicializuje komponentu a nastavuje její počáteční stav.
    - `render()`: Vykresluje uživatelské rozhraní komponenty.
    - `componentDidMount()`: Volá se po umístění komponenty do DOMu (mounted). Často se využívá k načítání dat z API nebo nastavování posluchačů událostí.

2. Aktualizace (Updating):
    - `render()`: Vykresluje aktualizované uživatelské rozhraní komponenty.
    - `componentDidUpdate()`: Volá se po aktualizaci komponenty. Často se používá pro provádění vedlejších účinků po aktualizaci komponenty.

3. Odmontování (Unmounting):
    - `componentWillUnmount()`: Volá se před odstraněním komponenty z DOMu (unmounted). Používá se pro čištění zdrojů, jako je zrušení požadavků na API nebo odstranění posluchačů událostí.

Kromě těchto metod React poskytuje další metody životního cyklu, které se méně často používají nebo byly zastaralé ve novějších verzích. Je důležité poznamenat, že s představením React Hooks mohou funkční komponenty také mít podobné chování životního cyklu pomocí hooku `useEffect`.

Pochopení životního cyklu komponenty pomáhá spravovat stav, provádět vedlejší účinky a řídit aktualizace a odstraňování komponenty.

---

**Difference between Ref and State Variables:**

Proměnné Ref:
- Refy poskytují způsob, jak přistupovat a interagovat přímo s DOM elementy nebo komponentami v Reactu.
- Obvykle se používají k řízení zaměření, přístupu k vstupům formuláře nebo integraci s knihovnami třetích stran.
- Refy se vytvářejí pomocí metody `React.createRef()` nebo pomocí hooku `useRef()`.
- Refy jsou mutovatelné a lze je aktualizovat bez vyvolání znovuvykreslení komponenty.
- Refy se obvykle přistupují pomocí atributu `ref` v JSX nebo v případě funkčních komponent pomocí vlastnosti `.current`.

Proměnné Stavu (State):
- Stavové proměnné se používají k řízení vnitřního stavu komponenty.
- Uchovávají data, která se mohou časem měnit, a vyvolávají znovuvykreslení komponenty při aktualizaci.
- Stavové proměnné se deklarují pomocí hooku `useState` nebo jsou definovány v konstruktoru třídních komponent.
- Stavové proměnné jsou neměnné, což znamená, že by neměly být přímo upravovány. Místo toho byste měli použít funkce pro aktualizaci stavu poskytované Reactem.
- Aktualizace stavové proměnné vyvolá znovuvykreslení komponenty a také dětských kom

---

**Difference between Context API and Prop Drilling:**

Context API a prop drilling jsou dvě různé přístupy pro správu stavu a předávání dat mezi komponentami v Reactu.

Context API:
- Context API je vestavěná funkce v Reactu, která umožňuje sdílet data napříč stromem komponent bez explicitního předávání propů na každé úrovni.
- Umožňuje vám vytvořit objekt kontextu a definovat data, která chcete sdílet.
- Data v kontextu mohou být přístupná komponentami vnořenými v rámci poskytovatele kontextu.
- Context API eliminuje potřebu předávat propy přes několik úrovní, což usnadňuje přístup k sdíleným datům.
- Je zejména užitečné pro globální data, jako jsou témata, ověření uživatele nebo lokalizace.

Prop Drilling:
- Prop drilling je vzor, ve kterém jsou data předávána skrz několik úrovní vnořených komponent jako propy.
- U prop drillingu rodičovská komponenta předává data svému potomkovi, který je pak předává svému vlastnímu potomkovi a tak dále.
- To může vést k dlouhému řetězci propů předávaných přes komponenty, které je ve skutečnosti nepot
