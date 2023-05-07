import React, {useState} from "react";
import box from '../../sharedScreen/Screenshot.png'
import box1 from '../../sharedScreen/Screenshot1.png'

export const AboutAll = () => {
	const [isOpen, setIsOpen] = useState(false);


	const handleClose = () => {
		setIsOpen(false);
	}

	const handleOpen = () => {
		setIsOpen(true);
		}

	return (
		<div className="html">
			{isOpen

			?  (
			<section className="answers">
			<button className="but" type="button" onClick={() => {
				handleClose()
			}}>
				<p>Close answers about HTML/CSS/JS</p>
				</button>
				<h3>
				1. Чи можна з js змінювати значення before, after?
				</h3>
				<h3>Відповідь:</h3>
				<p>Ні не можна змінити значення псевдоелементів, але можна змінити стилі які до них застосовуються, для того щоб змінити стилі нам потрібно через querySelector вибрати наш елемент з псевдокласом і потім використати
					метод getComputedStyle куди передати вибраний через querySelector елемент.
				</p>

				<h3>
				2.Що вказує значення "1em" і якого параметра він прив'язаний
				</h3>
				<h3>Відповідь:</h3>
				<p>'1em' це одиниця вимірювання відносно батьківського елементу, наприклад висота блоку, шрифти і т.д, тобто якщо буде 2em то буде в два рази більше ніж у батьківського, якщо 0.5em то половина розміру батьківського</p>

				<h3>
				3. Вмістити три блоки 20X20px в ряд, блок шириною 60px,
				 при цьому у блоків повинні бути межі. Реалізуйте всі варіанти, які знаєте.


				</h3>
				<img src={box} alt="box"></img>
				<h3>Відповідь:</h3>
				<p>Є кілька варіантів, але для того щоб враховувати межі потрібно написати стиль box-sizing: border-box, можливо зробити за допомогою флексів(display:flex) і по стандарту там буде flex-direction: row, ще можна зробити за допомогою display:inline-block,
			це комбіновані властивості блока, який ведеться як inline, тобто дозволяє ще елементам бути поруч з ним, а не розтягується на всю довжину. За допомогою грідів display: grid,
  				 де ставимо блоку width: 60px, column-gap: 20px, grid-template-columns: repeat(3, 20px), встановлюємо 3 блоки по 20 пікселів.</p>

				<h3>
				4. Є масив, де лежать об'єкти з датами,
				 відсортуйте його за датами.
				<p>{`let array = [
					{date: '2017-01-10'},
					{date: '2016-05-18'},
					{date: '2002-12-20'},
					{date: '2020-06-30'}
				];`
				}{

				}</p>
				</h3>
				<h3>Відповідь:</h3>
				<p>{`За допомогою методу сорт та методу Date()`}<br/>{` const sort = (array) => {`}<br/>{`let sortArray = array.sort((a, b) => (
		new Date(a.date) - new Date(b.date)
	))`}<br/>{`return sortArray `}<br/>{`}`} <br/> Тобто виклик функції з переданим масивом sort(array) нам поверне відфільтрований масив з датою.</p>

				<h3>
				5.Напишіть код, який при натисканні на будь-який div всередині root буде виводити в консоль його id.
				</h3>
				<img src={box1} alt="box" />
				<h3>Відповідь:</h3>
				<p>Для того щоб не вішати обробник на кожен div, ми можемо використати event deligation на наш батьківський елемент, скріпт буде виглядати наступним чином: <br/> <strong>{
						`const root = document.querySelector('#root');
  root.addEventListener('click', event => {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'DIV') {
      console.log(clickedElement.id);
    }
  })`
				} </strong></p>
				</section>
				)
			: (<button className="but" type="button" onClick={() => {
				handleOpen()
			}}>
				<p>Open answers about HTML/CSS/JS</p>
				</button>
				)
			}
		</div>
	)
}