const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
    const link = document.createElement('link');
    const linkJP = document.createElement('link');
    link.href = 'https://db.onlinewebfonts.com/c/a332acaf781c7cd772622c8d44c40bc7?family=Meiryo';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    linkJP.href = 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap';
    linkJP.rel = 'stylesheet';

    document.head.appendChild(linkJP);

    const font = new FontFaceObserver('Meiryo');
    const fontJP = new FontFaceObserver('Noto Sans JP');

    font.load().then(() => {
        // document.getElementById('lds-ripple').classList.add('hidden');
        // document.getElementById('wrapper').classList.add('font-loaded');
        // console.log('Loaded font Orbitron');
    });

    fontJP.load().then(() => {
        // document.getElementById("wrapper-landing-loader").classList.add('hidden');
        document.getElementById('wrapper').classList.add('font-loaded');
    });
};

export default Fonts;