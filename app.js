const card = document.querySelector ('.card');

document.body.addEventListener ('click', handleBodyClick);
document.querySelector ('.card_btn-wrapper').addEventListener ('click', handleShareClick);


function handleShareClick (e)
{
    e.stopPropagation ();
    card.classList.add ('active');
}

function handleBodyClick (e)
{
    card.classList.remove ('active');
}