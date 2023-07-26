import Button from "./components/Button.jsx";
import { GoStack, GoStarFill } from "react-icons/go";

function App() {
    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <div className="flex p-5 gap-5">
            <div className="flex flex-col gap-2.5">
                <div>
                    <Button primary className="mb-6" onClick={handleClick}>
                        <GoStarFill />
                        Click me
                    </Button>
                </div>
                <div>
                    <Button secondary>
                        Click me
                        <GoStack />
                    </Button>
                </div>
                <div>
                    <Button success>Click me</Button>
                </div>
                <div>
                    <Button danger>Click me</Button>
                </div>
                <div>
                    <Button warning>Click me</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <div>
                    <Button rounded primary>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded secondary>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded success>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded danger>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded warning>
                        Click me
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <div>
                    <Button outline primary>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button outline secondary>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button outline success>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button outline danger>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button outline warning>
                        Click me
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <div>
                    <Button rounded outline primary>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded outline secondary>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded outline success>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded outline danger>
                        Click me
                    </Button>
                </div>
                <div>
                    <Button rounded outline warning>
                        Click me
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
