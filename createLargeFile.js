'use strict'

const fs = require('fs');

const file = fs.createWriteStream('./demoFile.file');

// insert data into the file
for(let i=0;i <= 1E6; i++) {
	file.write('Streams are the best things that have ever happened to Node.js vfm;vmfv f v;mfv f v;fmv f;mvf;mvf vm;fvfmvfmv;mf;mvf;mvfm;v;fmv;mf;mvf;mv;fmv;fm;vmf;vmf;mvf;mv;fmv;mfv;mf;mvf;mvm vf;vmfv f;vfm;vf vmf;mvf;mvmfmvf;vf mvf;mvfm;v;fmmv;f;mvfv;fm;vmf;vfStreams are the best things that have ever happened to Node.js vfm;vmfv f v;mfv f v;fmv f;mvf;mvf vm;fvfmvfmv;mf;mvf;mvfm;v;fmv;mf;mvf;mv;fmv;fm;vmf;vmf;mvf;mv;fmv;mfv;mf;mvf;mvm vf;vmfv f;vfm;vf vmf;mvf;mvmfmvf;vf mvf;mvfm;v;fmmv;f;mvfv;fm;vmf;vfStreams are the best things that have ever happened to Node.js vfm;vmfv f v;mfv f v;fmv f;mvf;mvf vm;fvfmvfmv;mf;mvf;mvfm;v;fmv;mf;mvf;mv;fmv;fm;vmf;vmf;mvf;mv;fmv;mfv;mf;mvf;mvm vf;vmfv f;vfm;vf vmf;mvf;mvmfmvf;vf mvf;mvfm;v;fmmv;f;mvfv;fm;vmf;vf\n');
}

file.end();


