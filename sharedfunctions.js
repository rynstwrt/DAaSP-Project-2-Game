const fadeOutSeconds = .5;

function fadeOutAll()
{
    const children = document.body.childNodes;
    for (let i = 0; i < children.length; ++i)
    {
        children[i].style.animation = `fadeOut ${fadeOutSeconds}s ease-in-out forwards`
    }
}

function loadNextPage(directory)
{
    setTimeout(() =>
    {
        window.open(directory, "_self");
    }, 1000 * fadeOutSeconds);
}