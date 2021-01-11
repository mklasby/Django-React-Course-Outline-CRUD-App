# Generated by Django 3.1.4 on 2021-01-11 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GraduateAttribute',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseNum', models.CharField(max_length=10)),
                ('learningOutcomeNum', models.IntegerField()),
                ('graduateAttribute', models.CharField(max_length=500)),
                ('instructionLevel', models.CharField(max_length=500)),
            ],
        ),
    ]
