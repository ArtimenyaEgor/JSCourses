var output = '<table><tr><td>Title</td><td>Value</td></tr>';
output += "<tr><td>Длина истории</td><td>" + window.history.length + "</td></tr>";
output += "<tr><td>Ширина экрана</td><td>" + window.screen.width + "</td></tr>";
output += "<tr><td>Высота экрана</td><td>" + window.screen.height + "</td></tr>";
output += "<tr><td>Доступная ширина экрана</td><td>" + window.screen.availWidth + "</td></tr>";
output += "<tr><td>Доступная высота экрана</td><td>" + window.screen.availHeight + "</td></tr>";
output += "<tr><td>Глубина цвета</td><td>" + window.screen.colorDepth + "</td></tr>";
output += "<tr><td>Ориентация экрана</td><td>" + window.screen.orientation + "</td></tr>";
output += "<tr><td>Строка адреса URL</td><td>" + window.location.href + "</td></tr>";
output += "<tr><td>Адрес с якорем</td><td>" + window.location.hash + "</td></tr>";
output += "<tr><td>Доменное имя</td><td>" + window.location.host + "</td></tr>";
output += "<tr><td>Номер порта</td><td>" + window.location.port + "</td></tr>";
output += "<tr><td>Номер протокола</td><td>" + window.location.protocol + "</td></tr>";
output += "<tr><td>Строка с get - парам.</td><td>" + window.location.search + "</td></tr>";
output += "<tr><td>Код браузера</td><td>" + window.navigator.arrCodeName + "</td></tr>";
output += "<tr><td>Имя браузера</td><td>" + window.navigator.appName + "</td></tr>";
output += "<tr><td>Разрешеность куки</td><td>" + window.navigator.cookieEnabled + "</td></tr>";
output += "<tr><td>Разрешеность java</td><td>" + window.navigator.javaEnabled + "</td></tr>";
output += "<tr><td>Он - лайн</td><td>" + window.navigator.onLine + "</td></tr>";
output += "<tr><td>Строка в userAgent</td><td>" + window.navigator.userAgent + "</td></tr>";
output += "<tr><td>Позиция X</td><td>" + window.screenX + "</td></tr>";
output += "<tr><td>Позиция Y</td><td>" + window.screenY + "</td></tr>";
output += "<tr><td>Прокрутка X</td><td>" + window.scrollX + "</td></tr>";
output += "<tr><td>Прокрутка Y</td><td>" + window.scrollY + "</td></tr>";
output += "<tr><td>Позиция left</td><td>" + window.screenLeft + "</td></tr>";
output += "<tr><td>Позиция top</td><td>" + window.screenTop + "</td></tr>";
output += "<tr><td>innerWidth</td><td>" + window.innerWidth + "</td></tr>";
output += "<tr><td>innerHeight</td><td>" + window.innerHeight + "</td></tr></table>";

document.write(output);