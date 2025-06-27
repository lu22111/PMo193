import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
const MyApp({super.key});
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Registro de Usuario',
home: const RegistroScreen(),
debugShowCheckedModeBanner: false,
);
}
}
class RegistroScreen extends StatefulWidget {
const RegistroScreen({super.key});
@override
State<RegistroScreen> createState() => _RegistroScreenState();
}
class _RegistroScreenState extends State<RegistroScreen> {
final _formKey = GlobalKey<FormState>();
final _nombreController = TextEditingController();
final _correoController = TextEditingController();
bool _aceptaTerminos = false;
void _registrar() {
if (_formKey.currentState!.validate()) {
if (!_aceptaTerminos) {
_mostrarDialogo('Error', 'Debes aceptar los términos y condiciones.');
} else {
_mostrarDialogo('Registro exitoso',
'Nombre: ${_nombreController.text}\nCorreo: ${_correoController.text}');
}
}
}
void mostrarDialogo(String titulo, String mensaje) {
showDialog(
context: context,
builder: () => AlertDialog(
title: Text(titulo),
content: Text(mensaje),
actions: [
TextButton(
onPressed: () => Navigator.pop(context),
child: const Text('Aceptar'),
),
],
),
);
}
@override
Widget build(BuildContext context) {
return Scaffold(
body: Stack(
children: [
    Container(
decoration: const BoxDecoration(
image: DecorationImage(
image: AssetImage('C:\laragon\www\PMo193\my-app\src\assets/imagen1.jpg'),
fit: BoxFit.cover,
),))))
}}