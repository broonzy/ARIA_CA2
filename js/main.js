window._skel_config = {
    prefix: 'style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

function cancelNumber(val)
{
    document.getElementById("display").value=val;
}
function theKeyValue(val)
{
    document.getElementById("display").value+=val;
}
function equalsTo()
{
    try
    {
        cancelNumber(eval(document.getElementById("display").value))
    }
    catch(equalsTo)
    {
        cancelNumber('Error')
    }
};