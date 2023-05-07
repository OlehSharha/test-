/* eslint-disable no-tabs */
/* eslint-disable max-len */
import React, { useState } from 'react';
import box8 from '../../sharedScreen/Screenshot8.png';
import box9 from '../../sharedScreen/Screenshot9.png';

export const AboutNode = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="node">
      {isOpen

        ? (
          <section className="answers">
            <button
              className="but"
              type="button"
              onClick={() => {
                handleClose();
              }}
            >
              <p>Close answers about Node</p>
            </button>
            <h3>
              1. Що таке файл package.json?
            </h3>
            <h3>Відповідь:</h3>
            <p>
              Це файл конфігурації, який зазвичай знаходиться в кореневій директорії проекту Node.js, Цей файл може бути згенерований автоматично за допомогою команди npm init
              Цей файл зазвичай використовується для керування проектом Node.js, управління залежностями, налаштування середовища та запуску скриптів.

              Деякі звичайні поля в package.json включають:

              name - назва проекту.
              <br />
              version - поточна версія проекту.
              <br />
              description - короткий опис проекту.
              <br />
              main - головний файл проекту, який буде запущено при виконанні require() для цього пакету.
              <br />
              dependencies - список залежностей проекту.
              <br />
              devDependencies - список залежностей, які використовуються тільки під час розробки проекту.
              <br />
            </p>
            <h3>
              2. Які є типи запитів HTTP?
            </h3>
            <h3>Відповідь:</h3>
            <p>
              Є кілька основних запитів
              <br />
              {' '}
              GET - запит на отримання ресурсу з сервера. Зазвичай використовується для отримання HTML-сторінок, зображень та інших файлів.
              <br />
              POST - запит на створення ресурсу на сервері або для відправки даних на сервер. Наприклад, можна використовувати POST-запит для відправки форми на сервер.

              <br />
              PUT - запит на оновлення існуючого ресурсу на сервері.

              <br />
              DELETE - запит на видалення ресурсу з сервера.
            </p>
            <h3>
              3. Поясніть різницю між локальним і глобальним встановленням пакетів npm
            </h3>
            <h3>Відповідь:</h3>
            <p>Використовуючи локальне встановлення пакетів вони зберігаються в проекті, за це відповідає папка node_modules, Глобальне встановлення пакетів NPM зберігає пакети в глобальному каталозі NPM, що зазвичай знаходиться в домашній папці користувача і для того щоб встановити глобально нам потрібно в терміналі додати -g:  npm install -g package_name.</p>
            <h3>
              4. Поясніть порядок виконання прослуховувачів подій у Node.js. Що буде результатом цього коду і чому?
              Розглянемо цей код:?
            </h3>
            <img src={box8} alt="box" />
            <h3>Відповідь:</h3>
            <p>
              Спочатку створюється eventEmitter, потім до нього додаються події з console.log( -FIRST),
              console.log(- SECOND),але так як у коді у нас спочатку викликається console.log(A),
              потім викликається метод emit(), де першим параметром передаємо нашу подію а другим передаємо данні які будуть виводитись першими в консоль лозі і виводиться спочатку FIRST потім SECOND і закриває наш код console.log(B), Тобто консоль лог буде мати такий вигляд:
              <br />
              A
              <br />
              Emitted Statement - FIRST
              <br />
              Emitted Statement - SECOND
              <br />
              B
            </p>
            <h3>
              5. Поясніть, що не так із використанням async/await у циклі forEach. Чи працює він належним чином? Ви можете це виправити?
              Розглянемо цей код:
            </h3>
            <img src={box9} alt="box" />
            <h3>Відповідь:</h3>
            <p>
              Проблема використання async/await у циклі forEach полягає в тому, що forEach не очікує на виконання асинхронної функції, він продовжує виконувати свій цикл і не очікує на результати виконання асинхронної функції
              <br />
              Для коректної роботи можна використати for of, або метод масивів map:
              <br />
              <br />
              {`async function printFiles() {`}
              <br />
              {`
					const files = await getFilePaths();`}
              <br />
              {`

					files.map( async(file) => {`}
              <br />
              {`
						const contents = await fs.readFile(file, 'utf8');`}
              <br />
              {`
						console.log(contents);`}
              <br />
              {`
					}`}
              <br />
              {`
				}`}
              <br />
              {`
				printFiles();`}
              <br />
            </p>
            <h3>
              6. Що саме робить module.exports у Node.js і яким би був простий приклад?
            </h3>
            <h3>Відповідь:</h3>
            <p>
              module.exports - це обєкт в Node.js, який дозволяє експортувати функції, обєкти або дані з одного модуля до іншого. Коли модуль завантажується в Node.js, є глобальний обєкт модуля, який містить змінну exports.
              Приклад використання
              <br />
              {`function add(a, b) {
							return a + b;
							}

			module.exports = { add }`}
              {' '}
              <br />
              {' '}
              та експортуємо його до іншого файлу
              {' '}
              <br />
              {' '}
              {`
			const {add} = require('./add.js');

			const sum = add(2, 3);
			console.log(sum);`}
            </p>
          </section>
        )
        : (
          <button
            className="but"
            type="button"
            onClick={() => {
              handleOpen();
            }}
          >
            <p>Open answers about Node</p>
          </button>
        )
      }
    </div>
  );
};
