import DisplayGitHubInfo from "./components/DisplayGitHubInfo";
import DisplayGitHubRepo from "./components/DisplayGitHubRepo";
import CreateRepoButton from "./components/CreateRepoButton";
function App() {
  return (
    <>
      {<DisplayGitHubInfo />}
      {<DisplayGitHubRepo />}
      {<CreateRepoButton />}
    </>
  );
}

export default App;
