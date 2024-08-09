const drawings = ["123.png", '808s_and_Oakleys-02.png', 'a place.png', 'acheee.png', 'all i need is love.png', 'brodie here.png', 'dino.png', 'done.png', 'dont_put_me_down.png', 'gutty.png', 'iciy.png', 'ilost.png', 'leefy.png', 'lies.png', 'monsty peso.png', 'never liked yall.png', 'not dead.png', 'Screenshot_20230103-025308.png', 'Screenshot_20230320-170121-01.png', 'sos.png', 'squs.png', 'the oracle.png', 'trouble.png', 'uuuh.png', 'will god forgive us.png', 'xos.png'];
const movies = ['0001-0085.mp4', '0001-0201.mp4', '0001-0250.mp4', '0001-0300_L.mp4', '1.mp4', '10.mp4', '11.mp4', '12.mp4', '13.mp4', '14.mp4', '15.mp4', '2.mp4', '2precious.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4', '7.mp4', '8.mp4', '9.mp4', 'BB8530.mp4', 'BON_YOUR.mp4', 'do_it_b.mp4', 'Do_U_Like_2_Party.mp4', 'Drowning_From_Deitifycation.mp4', 'FUCK_COURSE_OFF.mp4', 'hit_another_lick_and_we_gon_be_alright.mp4', 'hold_out.mp4', 'Hover_Sounds.mp4', 'howls.mp4', 'I_AM_DEUS.mp4', 'Make_A_Bitch_So_Gay.mp4', 'moi.mp4', 'nightcrawler.mp4', 'RENEGADES.mp4', 'Weird_Fishes_Wear_Oakleys.mp4', 'whodouadmire.mp4'];
drawings.forEach(makePics);
movies.forEach(makeMovs);

function makePics(pic) {
	const newPic = document.createElement("img");
	newPic.setAttribute('src', `drawings\\${pic}`);
	newPic.setAttribute("width", "300px");
	newPic.setAttribute("height", "300px");
	const element = document.getElementById('div1');
	element.appendChild(newPic)
}

function makeMovs(mov) {
	const newMov = document.createElement("video");
	newMov.setAttribute('src', `movies\\${mov}`);
	newMov.setAttribute('width', '300px');
	newMov.setAttribute('height', '300px');
	newMov.setAttribute('controls', 'controls');
	const element = document.getElementById('div2');
	element.appendChild(newMov);
}