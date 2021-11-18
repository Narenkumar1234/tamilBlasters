import 'package:flutter/material.dart';

class RedPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.red,
      body: Padding(
        padding: const EdgeInsets.all(18.0),
        child: Center(
          child: Text(
            "This is red screen",
          ),
        ),
      ),
    );
  }
}
