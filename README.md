# bsa17-9

**just open index.html in your browser**
----------

Academy 2017: React_part 2. Александр Ковалев JS-9
Задание:

- Создать новый репозиторий для этого задания, а не использовать прошлый.

- Модифицировать существующее домашнее задание так, чтобы не использовать атрибуты для передачи информации в дочерние компоненты (переменные/функции), a использовать: function mapDispatchToProps(dispatch, ownProps) { //... } function mapStateToProps(state) { //... } const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(Component); в компонентах, которые и инициируют данные actions, что в итоге позволит иметь необходимые переменные и методы в this.props компонента.

- Добавить компонент для фильтрации по имени пользователя, таким образом, что при вводе символов в поле для ввода изменялся список пользователей в уже имеющемся компоненте.

Например:

- Поле ввода: “”

Список пользователей:

Иванов

Петров

Сидоров

- Поле ввода: “с”

Список пользователей:

Сидоров
