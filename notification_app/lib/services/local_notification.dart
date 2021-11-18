import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

class LocalNotificationService {
  static final FlutterLocalNotificationsPlugin _notificationPlugin =
      FlutterLocalNotificationsPlugin();

  static void initialize(BuildContext context) {
    final InitializationSettings initSettings = InitializationSettings(
        android: AndroidInitializationSettings("@mipmap/ic_launcher"));

    _notificationPlugin.initialize(initSettings,
        onSelectNotification: (String? route) async {
      if (route != null) {
        Navigator.of(context).pushNamed(route);
      }
    });
  }

  static void display(RemoteMessage msg) async {
    try {
      final id = DateTime.now().millisecondsSinceEpoch ~/ 1000;

      final NotificationDetails notificationDetails = NotificationDetails(
          android: AndroidNotificationDetails(
              "msgapp", "msgapp_channel", "demo_lab",
              importance: Importance.max, priority: Priority.high));

      await _notificationPlugin.show(id, msg.notification!.title,
          msg.notification!.body, notificationDetails,
          payload: msg.data["route"]);
    } on Exception catch (w) {
      print(w);
    }
  }
}
