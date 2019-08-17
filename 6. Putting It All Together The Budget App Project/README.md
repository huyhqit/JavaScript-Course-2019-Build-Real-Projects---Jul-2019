#6. Putting It All Together The Budget App Project

- Khi một button được click thì sự kiện sẽ tác động lên tất cả những element parent của nó
- Điều này được gọi là *bubbling*.
- Element được tác động đầu tiên, element cái mà yếu tố gây ra sự kiện
- Điều này được gọi là *target* element.
- Vì event có thể bubbles lên cao trong DOM tree, nên có thể đưa event gắn lên element parent
- Điều này được gọi là *event delegation*.

*Event Bubbling* -> *Target Element* -> *Event Delegation*