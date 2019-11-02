import { Component } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  items = [
    {
      'text': '7',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '8',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '9',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '/',
      'type': 'operator',
      'color': '#dc9140'
    },
    {
      'text': '4',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '5',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '6',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': 'x',
      'type': 'operator',
      'color': '#dc9140'
    },
    {
      'text': '1',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '2',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '3',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '-',
      'type': 'operator',
      'color': '#dc9140'
    },
    {
      'text': 'C',
      'type': 'clear',
      'color': '#d5d5d5'
    },
    {
      'text': '0',
      'type': 'number',
      'color': '#d5d5d5'
    },
    {
      'text': '=',
      'type': 'equal',
      'color': '#d5d5d5'
    },
    {
      'text': '+',
      'type': 'operator',
      'color': '#dc9140'
    },
  ];

  getStyles(item) {
    if (item.type === 'operator') {
      return {
        background: '#dc9140',
        color: '#ffffff'
      }
    } else {
      return {
        background: '#d5d5d5'
      }
    }
  }

  output = '';
  tempOutput = '';
  tempOperator = '';

  onClick(ele) {
    const type = ele.type;
    const value = ele.text;
    if (type === 'number') {
      this.appendNumber(ele.text);
    }

    if (type === 'operator') {
      if (this.tempOperator === '') {
        this.tempOperator = value;
        this.tempOutput = this.output;
        this.output = '0';
      } else {
        this.tempOperator = value;
        this.tempOutput = this.output;
        this.output = '0';
      }
    }

    if (type === 'equal') {
      if (this.tempOutput !== '' && this.tempOperator !== '') {
        this.calculate();
      }
    }

    if (type === 'clear') {
      this.output = '0';
      this.tempOutput = '0';
      this.tempOperator = '0';
    }
  }

  appendNumber(number) {
    if (this.output === '0') {
      this.output = number;
    } else  {
      this.output += number;
    }
  }

  calculate() {
    switch (this.tempOperator) {
      case '+':
        this.output = String(Number(this.tempOutput) + Number(this.output));
        break;
      case '-':
        this.output = String(Number(this.tempOutput) - Number(this.output));
        break;
      case 'x':
        this.output = String(Number(this.tempOutput) * Number(this.output));
        break;
      case '/':
        this.output = String(Number(this.tempOutput) / Number(this.output));
        break;
    }
    this.tempOutput = '0';
    this.tempOperator = '0';
  }
}
