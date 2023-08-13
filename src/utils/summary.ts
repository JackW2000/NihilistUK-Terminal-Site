import config from '../../config.json';

const summary = async (args: string[]): Promise<string> => {
  return `                       
  ___,___,_______,____        -----------
  |  :::|///./||'||    \\      - ABOUT -
  |  :::|//.//|| || H)  |     - ${config.name}
  |  :::|/.///|!!!|     |     - ${config.ps1_hostname}
  |   _______________   |     - <u><a href="${config.cv_url}" target="_blank">cv</a></u>
  |  |:::::::::::::::|  |     - <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  |  |_______________|  |     -----------
  |  |_______________|  |     - CONTACT -
  |  |_______________|  |     - <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  |  |_______________|  |     - <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  |__|_______________|__|     - <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
  `;
};

export default summary;
